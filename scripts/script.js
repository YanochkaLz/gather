document.addEventListener('DOMContentLoaded', function () {
	const charts = [...document.querySelectorAll('.budgetChart')];

	charts.forEach(chart => {
		const ctx = chart.getContext('2d');

		new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: ['Spent', 'Remaining'],
				datasets: [
					{
						data: [64, 36],
						backgroundColor: ['#e4bde4', '#242529'],
						borderWidth: 0,
						borderRadius: [20, 0],
					},
				],
			},
			options: {
				cutout: '80%',
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					tooltip: {
						enabled: false,
					},
					legend: {
						display: false,
					},
				},
			},
		});
	});
});
