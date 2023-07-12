import logo from './logo.svg';
import './App.css';
import './main.css';
import Header from './components/Header';

function App() {
  return (

      
<body>
  <div id="root"></div>


<div class="row">
  <div class="large-3 columns">
    <h1><img src="img/SAMIRA LOGO.png" width="238" height="272"/></h1>
  </div>
  <div class="large-9 columns">
    <ul class="right button-group">
      <li><a href="#" class="button">Home</a></li>
      <li><a href="about.html" class="button">About Me</a></li>
      <li><a href="resources.html" class="button">Graphic Design</a></li>
      <li><a href="gallery.html" class="button">Gallery</a></li>
    <li><a href="gallery.html" class="button">Gallery</a></li></ul>
  </div>
   <div class="large-9 columns">
    <ul class="right button-group">
      
    
     
      <li><input type="search" accesskey="gallery" name="search" class="active" placeholder="Search" size="large"/></li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="large-12 columns">
    <ul class="example-orbit" data-orbit>
      <li><img src="img/pic-2.jpg"/></li>
      <li><img src="img/pic-2.jpg"/></li>
      <li><img src="img/colorminisite.jpg"/></li>
      <li><img src="img/banner-slideshow.jpg" alt=""/></li>
    </ul>
  </div>
</div>

<hr/>

<div class="row">
  <div class="large-4 columns"> <img src="img/index-pic-2.jpg"/>
    <h4><a href="#">Web Design</a></h4>
    
<p>Web designing is one of the most sweetest works that I had ever done. When I start to Web Designing, I do not know how the time passes by. </p>

<a href="#">Read More →</a> 
  </div>
  <div class="large-4 columns"> <img src="img/index-pic-1.jpg"/>
    <h4><a href="resources.html">Graphic Design</a></h4>
    <p>Graphic Design is one of my hobbies. I don&rsquo;t do it just for money I do   it because I love it. I chose this major since I went high school. I got   my Diploma at art school as well.</p>
    <a href="#">Read More →</a>
</div>
  <div class="large-4 columns"> <img src="img/index-pic-3.jpg"/>
    <h4><a href="gallery.html">Fine Art</a></h4>
    <p>Have you ever wanted to create something to express yourself? If so, you were exploring a fundamental idea connected to fine art. Definitions can be slippery, but in basic terms, fine art is something created for aesthetic or intellectual value rather than utilitarian or practical purpose. </p>
    <a href="#">Read More →</a>
  </div>
</div>
<div class="row">
  <div class="large-12 columns">
    <div class="panel">
      <h4>Get in touch!</h4>
      <div class="row">
        <div class="large-9 columns">
          <p>We'd love to hear from you, you attractive person you.</p>
        </div>
        <div class="large-3 columns"> <a href="mailto:sb28471@email.vccs.edu" class="button">Contact Samira</a> </div>
      </div>
    </div>
  </div>
	</div>

<footer class="row">
  <div class="large-12 columns">
    <hr/>
    <div class="row">
      <div class="large-6 columns">
        <p>&copy; Copyright Samira's website </p>
      </div>
      <div class="large-6 columns">
        <ul class="inline-list right">
          <li><a href="https://www.linkedin.com/feed/" target="_blank"><img src="img/social3.png" alt=""/></a></li>
          <li><a href="https://www.facebook.com/" target="_blank"><img src="img/social2.png" alt=""/></a></li>
          <li><a href="https://www.instagram.com/" target="_blank"><img src="img/social1.png" alt=""/></a></li>
          <li><a href="#"><img src="img/social4.png" alt=""/></a></li>
			
        </ul>
      </div>
    </div>
  </div>
</footer>
      <Header />
      <main>
        <section>
          Section 1
        </section>
        <section>
          Section 2
        </section>
        <section>
          Section 3
        </section>
      </main>
      <footer>
        This is a footer
      </footer>
    //</>
  );
}

export default App;
