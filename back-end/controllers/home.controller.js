const index = (req, res) => {
    try {
        res.render('home/index.ejs');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


const personnes = (req, res) => {
    try {
        res.render('home/personnes.ejs');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const Tasks = (req, res) => {
    try {
        res.render('home/task.ejs');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};