export default function json2html(data) {
    // Define unique columns by scanning all objects in the array
    const columns = Array.from(
      data.reduce((cols, row) => {
        Object.keys(row).forEach((col) => cols.add(col));
        return cols;
      }, new Set())
    );
  
    // Start building the HTML table as a string
    let html = `<table data-user="kraditya2073@gmail.com">\n  <thead>\n    <tr>`;
  
    // Add table headers
    columns.forEach((col) => {
      html += `<th>${col}</th>`;
    });
    html += `</tr>\n  </thead>\n  <tbody>\n`;
  
    // Add table rows
    data.forEach((row) => {
      html += `    <tr>`;
      columns.forEach((col) => {
        html += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
      });
      html += `</tr>\n`;
    });
  
    // Close table
    html += `  </tbody>\n</table>`;
  
    return html;
  }
  