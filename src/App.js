import React from 'react';
import './App.css';
import GlampingImg from './build/assets/images/carousel/glamping-en-las-montañas.jpg'
class App extends React.Component
{
  
  render()
  {
    
   
    return (
      <div>
          <div id="top-bar" class="container">
            <div class="row">
              <div class="span4">
                <form method="POST" class="search_form">
                  <input type="text" class="input-block-level search-query" Placeholder="ex. Glamping 10x10" />
                </form>
              </div>
              <div class="span8">
                <div class="account pull-right">
                  <ul class="user-menu">        
                    <li><a href="#">Mi cuenta</a></li>
                    <li><a href="#">Carrito de compras</a></li>
                    <li><a href="#">Checkout</a></li>          
                    <li><a href="#">Iniciar sesión</a></li>    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="wrapper" class="container">
            <section class="navbar main-menu">
              <div class="navbar-inner main-menu">        
                <a href="#" class="logo pull-left">Outdoor Bussiness</a>
                <nav id="menu" class="pull-right">
                  <ul>
                    <li><a href="#">Glamping</a>  </li>                    
                    <li><a href="#">Bicicletas</a></li>
                  </ul>
                </nav>
              </div>
            </section>
            <section  class="homepage-slider" id="home-slider">
              <div class="flexslider">
                <ul class="slides">
                  <li>
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-cg.appspot.com/o/GlampingFoto2.webp?alt=media&token=00126772-b7b9-493f-9169-0622a43f8c80" alt="" />
                    <div class="intro">
                      <h1>Outdoor Bussiness</h1>
                      <p><span>Abrimos nuestras puertas</span></p>
                      <p><span>Encuentre todo lo que necesita para su negocio en las montañas</span></p>
                    </div>
                  </li>
                </ul>
              </div>      
            </section>
            <section class="header_text">
              Somos la empresa ideal para que empieze su negocio turístico 
              <br/>Encuentre los mejores productos para usted
            </section>
            <section class="main-content">
              <div class="row">
                <div class="span12">                          
                  <div class="row">
                    <div class="span12">
                      <h4 class="title">
                        <span class="pull-left"><span class="text"><span class="line">Feature <strong>Products</strong></span></span></span>
                        <span class="pull-right">
                          <a class="left button" href="#myCarousel" data-slide="prev"></a><a class="right button" href="#myCarousel" data-slide="next"></a>
                        </span>
                      </h4>
                      <div id="myCarousel" class="myCarousel carousel slide">
                        <div class="carousel-inner">
                          <div class="active item">
                            <ul class="thumbnails">                        
                              <li class="span3">
                                <div class="product-box">
                                  <span class="sale_tag"></span>
                                  <p><a href="#"><img src="assets/images/ladies/1.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Ut wisi enim ad</a><br/>
                                  <a href="#" class="category">Commodo consequat</a>
                                  <p class="price">$17.25</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <span class="sale_tag"></span>
                                  <p><a href="#"><img src="assets/images/ladies/2.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Quis nostrud exerci tation</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$32.50</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/ladies/3.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Know exactly turned</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$14.20</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/ladies/4.jpg" alt="" /></a></p>
                                  <a href="#" class="title">You think fast</a><br/>
                                  <a href="#" class="category">World once</a>
                                  <p class="price">$31.45</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div class="item">
                            <ul class="thumbnails">
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/ladies/5.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Know exactly</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$22.30</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/ladies/6.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Ut wisi enim ad</a><br/>
                                  <a href="#" class="category">Commodo consequat</a>
                                  <p class="price">$40.25</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/ladies/7.jpg" alt="" /></a></p>
                                  <a href="#" class="title">You think water</a><br/>
                                  <a href="#" class="category">World once</a>
                                  <p class="price">$10.45</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/ladies/8.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Quis nostrud exerci</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$35.50</p>
                                </div>
                              </li>                                                                  
                            </ul>
                          </div>
                        </div>              
                      </div>
                    </div>            
                  </div>
                  <br/>
                  <div class="row">
                    <div class="span12">
                      <h4 class="title">
                        <span class="pull-left"><span class="text"><span class="line">Latest <strong>Products</strong></span></span></span>
                        <span class="pull-right">
                          <a class="left button" href="#myCarousel-2" data-slide="prev"></a><a class="right button" href="#myCarousel-2" data-slide="next"></a>
                        </span>
                      </h4>
                      <div id="myCarousel-2" class="myCarousel carousel slide">
                        <div class="carousel-inner">
                          <div class="active item">
                            <ul class="thumbnails">                        
                              <li class="span3">
                                <div class="product-box">
                                  <span class="sale_tag"></span>
                                  <p><a href="#"><img src="assets/images/cloth/bootstrap-women-ware2.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Ut wisi enim ad</a><br/>
                                  <a href="#" class="category">Commodo consequat</a>
                                  <p class="price">$25.50</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/cloth/bootstrap-women-ware1.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Quis nostrud exerci tation</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$17.55</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/cloth/bootstrap-women-ware6.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Know exactly turned</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$25.30</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/cloth/bootstrap-women-ware5.jpg" alt="" /></a></p>
                                  <a href="#" class="title">You think fast</a><br/>
                                  <a href="#" class="category">World once</a>
                                  <p class="price">$25.60</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div class="item">
                            <ul class="thumbnails">
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/cloth/bootstrap-women-ware4.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Know exactly</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$45.50</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/cloth/bootstrap-women-ware3.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Ut wisi enim ad</a><br/>
                                  <a href="#" class="category">Commodo consequat</a>
                                  <p class="price">$33.50</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/cloth/bootstrap-women-ware2.jpg" alt="" /></a></p>
                                  <a href="#" class="title">You think water</a><br/>
                                  <a href="#" class="category">World once</a>
                                  <p class="price">$45.30</p>
                                </div>
                              </li>
                              <li class="span3">
                                <div class="product-box">
                                  <p><a href="#"><img src="assets/images/cloth/bootstrap-women-ware1.jpg" alt="" /></a></p>
                                  <a href="#" class="title">Quis nostrud exerci</a><br/>
                                  <a href="#" class="category">Quis nostrud</a>
                                  <p class="price">$25.20</p>
                                </div>
                              </li>                                                                  
                            </ul>
                          </div>
                        </div>              
                      </div>
                    </div>            
                  </div>
                  <div class="row feature_box">            
                    <div class="span4">
                      <div class="service">
                        <div class="responsive">  
                          <img src="assets/images/feature_img_2.png" alt="" />
                          <h4>MODERN <strong>DESIGN</strong></h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>                  
                        </div>
                      </div>
                    </div>
                    <div class="span4">  
                      <div class="service">
                        <div class="customize">      
                          <img src="assets/images/feature_img_1.png" alt="" />
                          <h4>FREE <strong>SHIPPING</strong></h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>
                        </div>
                      </div>
                    </div>
                    <div class="span4">
                      <div class="service">
                        <div class="support">  
                          <img src="assets/images/feature_img_3.png" alt="" />
                          <h4>24/7 LIVE <strong>SUPPORT</strong></h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and printing industry unknown printer.</p>
                        </div>
                      </div>
                    </div>  
                  </div>    
                </div>        
              </div>
            </section>
            <section id="footer-bar">
              <div class="row">
                <div class="span3">
                  <h4>Navigation</h4>
                  <ul class="nav">
                    <li><a href="#">Homepage</a></li>  
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contac Us</a></li>
                    <li><a href="#">Your Cart</a></li>
                    <li><a href="#">Login</a></li>              
                  </ul>          
                </div>
                <div class="span4">
                  <h4>My Account</h4>
                  <ul class="nav">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Order History</a></li>
                    <li><a href="#">Wish List</a></li>
                    <li><a href="#">Newsletter</a></li>
                  </ul>
                </div>
                <div class="span5">
                  <p class="logo">TheRichShop</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. the  Lorem Ipsum has been the industry's standard dummy text ever since the you.</p>
                  <br/>
                  <span class="social_icons">
                    <a class="facebook" href="#">Facebook</a>
                    <a class="twitter" href="#">Twitter</a>
                    <a class="skype" href="#">Skype</a>
                    <a class="vimeo" href="#">Vimeo</a>
                  </span>
                </div>          
              </div>  
            </section>
            <section id="copyright">
              <span>Copyright@2020.</span>
            </section>
          </div>
      
      </div>
       
) } }
 export default App;