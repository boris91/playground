let intlNumberFormat = new Intl.NumberFormat('ru', {
	style: 'currency',
	currency: 'RUB',
	maximumSignificantDigits: 3
});

export default intlNumberFormat.format.bind(intlNumberFormat);