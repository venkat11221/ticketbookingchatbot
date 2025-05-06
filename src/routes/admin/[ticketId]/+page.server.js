export const load = async ({ params }) => {
	const apiKey = 'qF3wveUq2Z2WAvnd5Q83NHdZ5NFEt6H9iQw0jmWFHNnILl0jIozEiKu0Znpkliay';
	const endpoint =
		'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-gvblzlp/endpoint/data/v1/action/findOne';

	const ticketId = params.ticketId; // Get the ticket ID from the URL

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'api-key': apiKey
			},
			body: JSON.stringify({
				dataSource: 'Cluster0',
				database: 'test',
				collection: 'tickets',
				filter: { _id: { $oid: ticketId } } // Correctly find ticket by its ObjectId
			})
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		// Return the fetched ticket data as props to the page
		return {
			ticket: data.document || null
		};
	} catch (error) {
		console.error('Error fetching ticket data:', error);
		return {
			ticket: null
		};
	}
};
