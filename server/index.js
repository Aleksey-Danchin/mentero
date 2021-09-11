import app from "./app";

const PORT = 80;

app.listen(PORT, () => {
	console.log(
		`Running a GraphQL API server at http://localhost:${PORT}/graphql`
	);
});
