export const calculateDataSetDuration = (timeseries) => {
	const years = Object.keys(timeseries);
	return [years[0], years[years.length - 1]];
};
