const renderHome = (req, res, next) => {
    res.render('index', { algo: "oi"});
}

const renderPg1 = (req, res, next) => {
    res.render('pg1');
}

const renderPg2 = (req, res, next) => {
    res.render('pg2');
}

const renderPg3 = (req, res, next) => {
    res.render('pg3');
}

module.exports = {
    renderHome, renderPg1, renderPg2, renderPg3,
}