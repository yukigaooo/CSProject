<script id="quiztemplate" type="text/template">
    <div class="item">
      <div class="panel panel-default">
        <div class="panel-heading">{{question}}</div>
          <div class="panel-body">
            <div style="float:left;width:400px">
            <div>a) {{A}}</div>
            <div>b) {{B}}</div>
            <div>c) {{C}}</div>
            <div>d) {{D}}</div>
            <div>Answer:  {{answer}}</div>
          </div>
        </div>
     </div>
</script>

var database = firebase.database().ref('questions');
  var data, build;
  var myTemplate = $("#quiztemplate").html()
  database.on('value',function(snapshot){
      build = "";
      data = snapshot.val();
      for(key in data){
          build += Mustache.render(myTemplate,data[key]);
          console.log(data[key]);
      }
     $("#outputques").html(build);
  });