const CurrentScore = ({score}: {score: number}) => {

	const scoreStyle = {
		fontFamily: '"Joti One", cursive',
		fontSize: 50,
		fill:" #d6d33e"
	};

	return (
		<g filter="url(#shadow)">
			<text
				style={scoreStyle}
				x="100"
				y="80"
			>
				{score}
			</text>
		</g>
	);
}

export default CurrentScore;
