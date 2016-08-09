const HEADERS_SPLITTER = '\u000d\u000a';
const KEY_AND_VALUE_SPLITTER = '\u003a\u0020';

export default (responseHeadersString) => {
	const headers = {};

	if (responseHeadersString) {
		responseHeadersString.split(HEADERS_SPLITTER).forEach(headerKvPair => {
			const index = headerKvPair.indexOf(KEY_AND_VALUE_SPLITTER);
			if (index > 0) {
				const key = headerKvPair.substring(0, index);
				const value = headerKvPair.substring(index + 2);
				headers[key] = value;
			}
		});
	}

	return headers;
};