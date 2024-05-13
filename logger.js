const fs = require('fs');

const logData = {
    "level": "error",
    "log_string": "Inside the Search API",
    "timestamp": "2023-09-15T08:00:00Z",
    "metadata": {
        "source": "log3.log"
    }
};

// Write JSON data to .log file
// fs.writeFile('example.log', JSON.stringify(logData), (err) => {
//     if (err) {
//         console.error('Error writing to file:', err);
//         return;
//     }
//     console.log('Data written to file successfully.');
// });

// // Read JSON data from .log file
fs.readFile('example.log', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const logs = data.split('\n');
    let jsonData = []
    logs.map((log)=>{
        jsonData.push(JSON.parse(log));
    })
    //const jsonData = JSON.parse(data);
    console.log('Data read from file:', jsonData);
});


// fs.readFile('example.log', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     const logs = data.split('\n');
//     const errorLogs = logs.filter(log => {
//         try {
//             const parsedLog = JSON.parse(log);
//             return parsedLog.level === 'error';
//         } catch (error) {
//             console.error('Error parsing log entry:', error);
//             return false;
//         }
//     });
//     console.log('Error logs:');
//     console.log(errorLogs);
// });
