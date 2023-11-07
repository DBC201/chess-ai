class Node {
	constructor(game) {
		this.game = new Chess(game.fen());

		this.score = null;
		
		this.parent = null;
		this.children = [];

		this.depth = 0;
		
		this.pieceValues = {
			'p': 1, 'n': 3, 'b': 3.25, 'r': 5, 'q': 8, 'k': 0
		};
	}

	addParent(parent) {
		this.parent = parent;
		parent.children.push(this);
		this.depth = parent.depth + 1;
	}

	getHistory() {
		const history = [];
		let node = this;

		while (node && node.game.history().length) {
			history.unshift(node.game.history()[0]);
			node = node.parent;
		}

		return history;
	}

	updateScore() {
		if (this.game.in_checkmate()) {
			this.score = this.game.turn() === 'b' ? Infinity : -Infinity;
			return;
		}

		if (this.game.in_draw()) {
			this.score = 0;
			return;
		}

		this.score = 0;

		const board = this.game.board();
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board.length; j++) {
				const square = board[i][j];

				if (!square) {
					continue;
				}

				if (square.color === 'w') {
					this.score += this.pieceValues[square.type];
				}
				else if (square.color === 'b') {
					this.score -= this.pieceValues[square.type];
				}
			}
		}
	}

	/**
	 * Updates the score if null
	 * 
	 * @returns {number} score
	 */
	getScore() {
		if (this.score === null) {
			this.updateScore();
		}

		return this.score;
	}
}

/**
 * Node that updates the parents when it is calculated
 * Used in non-recursive dfs/bfs
 * do not edit the variables, only for reading and calling functions
 */
class NonRecursiveNode extends Node {
	constructor(game) {
		super(game);
		this.score = null;

		this.uncalculatedCount = 0;
	}

	addParent(parent) {
		super.addParent(parent);
		if (this.score === null) {
			parent.uncalculatedCount++;
		}
	}

	calculate() {
		if (this.score !== null) {
			return;
		}

		this.updateScore();

		let node = this;

		while (node && node.uncalculatedCount === 0) {
			if (node.parent) {
				node.parent.uncalculatedCount--;
				if (node.parent.score === null) {
					node.parent.score = node.score;
				} else if (node.parent.game.turn() === 'w') {
					node.parent.score = Math.max(node.parent.score, node.score);
				} else {
					node.parent.score = Math.min(node.parent.score, node.score);
				}
			}

			node = node.parent;
		}
	}
}

function getRandom(list) {
	return list[Math.floor(Math.random() * list.length)];
}

function getRandomMove(game) {
	return getRandom(game.moves());
}

function alphaBetaPruning(root, max_depth, alpha, beta) {
	if (root.depth >= max_depth || root.game.game_over()) {
		return;
	}

	if (root.game.turn() === 'w') {
		let maxScore = null;
		const moves = root.game.moves();
		for (let i = 0; i < moves.length; i++) {
			const child = new Node(root.game);
			child.addParent(root);
			child.game.move(moves[i]);
			alphaBetaPruning(child, max_depth, alpha, beta);

			const score = child.getScore();

			if (maxScore === null || score > maxScore) {
				maxScore = score;
			}

			alpha = Math.max(alpha, maxScore);

			if (beta < alpha) {
				break;
			}
		}
		root.score = maxScore;
		return root;
	} else {
		let minScore = null;
		const moves = root.game.moves();
		for (let i = 0; i < moves.length; i++) {
			const child = new Node(root.game);
			child.addParent(root);
			child.game.move(moves[i]);
			alphaBetaPruning(child, max_depth, alpha, beta);

			const score = child.getScore();

			if (minScore === null || score < minScore) {
				minScore = score;
			}

			beta = Math.min(beta, minScore);

			if (beta < alpha) {
				break;
			}
		}
		root.score = minScore;
		return root;
	}
}

function bruteGraphSearch(root, max_depth) {
	if (max_depth <= 0) {
		return getRandomMove(game);
	}
	if (game.history().length < 8) {

	}

	const q = [];

	q.push(root);

	while (q.length) {
		const curr = q.shift();

		if (curr.depth >= max_depth || curr.game.game_over()) {
			let node = curr;
			node.calculate();
			continue;
		}

		const moves = curr.game.moves();
		for (let i = 0; i < moves.length; i++) {
			const node = new NonRecursiveNode(curr.game);
			node.game.move(moves[i]);
			node.addParent(curr);
			q.push(node);
		}
	}

	root.children.sort((a, b) => a.score - b.score);

	return root;
}

let cache = null;

function getBestMove(game, max_depth, debug) {
	let root;

	if (cache) {
		root = cache;
	}
	else {
		// root = new NonRecursiveNode(game);
		// root = _bruteGraphSearch(game, max_depth, -Infinity, Infinity);
		root = new Node(game);
		alphaBetaPruning(root, max_depth, -Infinity, Infinity);
	}

	if (debug) {
		console.log('Root: ', root.score, root.game.history()[0]);
		console.log("Children Count: ", root.children.length);
		for (let i = 0; i < root.children.length; i++) {
			console.log(root.children[i].score, root.children[i].game.history()[0]);
			root.children[i].children.forEach((node) => console.log('\t', node.game.history()[0], node.score));
		}
	}

	const next = getRandom(root.children.filter((child) => child.score === root.score));

	if ((root.score === Infinity || root.score === -Infinity) && next.children.length) {
		cache = next; // cache only if win or lose
	}
	else {
		cache = null;
	}

	return next.game.history()[0];
}
