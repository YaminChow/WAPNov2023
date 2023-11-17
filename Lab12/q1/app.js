const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use((req,res)=> {console.log('Hello!');
    res.end('End');
}
);

app.listen(app.get('port'), ()=> console.log(`listen on ${app.get('port')}`));

