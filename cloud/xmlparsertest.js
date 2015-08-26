


exports.index = function(req, res) {
        retrieveFeedSource();
        res.render('hello', {});
};

function retrieveFeedSource() {
        var FeedSource = Parse.Object.extend("FeedSource");
        var query = new Parse.query(FeedSource);
        query.find({
            success: function(results) {
                for(var i = 0; i < results.length; i++) {
                  var source = results[i];
                  var sourceName = source.get("sourcename");
                  console.log(source)
                  console.log(sourceName)
                }
            },
            error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });   
}

