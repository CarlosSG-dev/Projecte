function iniciar(){
    
    document.addEventListener('onload', navbar());
    document.getElementsByTagName('footer').addEventListener('onload',footer()); 
    
}
 function footer(){
    let footer = document.write(`<footer class="footer-distributed">

			<div class="footer-right">

				<a href="#"  class="facebookiconofoot"><i></i></a>
				<a href="#"  class="twitterfoot"><i></i></a>
				<a href="#"  class="instagramfoot"><i></i></a>
				<a href="#" class="githubfoot"><i ></i></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">
					<a class="link-1" href="#index.html">Inicio</a>

					<a href="#">Exchanges</a>

					<a href="#" id="mostrarTabla">Ranking</a>

					<a href="#">Proyectos</a>

					<a href="#">Contacto</a>
				</p>

				<p>Crypto Simarro @CarlossSoler</p>
			</div>

		</footer>`);

    $('#footer').html(footer);

 
}

function navbar(){
    let navbar = document.write(`<nav class="navbar navbar-expand-md bg-dark navbar-dark">
   
    <a class="navbar-brand" href="index.html">Crypto Simarro</a>
  
   
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
  

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Exchanges</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ranking</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="login.html">Login</a>
        </li>
      </ul>
    </div>
  </nav>`);

  $('#navbar').html(navbar);

}
var btn = $('#buttonTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


iniciar();

