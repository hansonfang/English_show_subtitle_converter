const fs = require('fs');
const path = require('path');

const format = (content) => {
	return content.replace(/Dialogu.*,,(.*)\\N.*\}(.*)(\r)/g, '$1  $2 \r\r');
}

const files = fs.readdirSync(__dirname).filter(fileName => fileName.endsWith('ass'));

files.forEach(fileName => {
	const _content = fs.readFileSync(path.resolve(__dirname, fileName), 'utf8');
	const content = format(_content);
	fs.writeFileSync(path.resolve(__dirname, 'outputs', fileName + '.txt'), content, 'utf8');
})
