<template>
  <div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <footer>
      <div class="footer-content">
        <h3>Interbus</h3>
        <p>
          Servicio de transporte intermunicipal del cauca. <br />
          te acercamos a tu destino de manera rapida y segura.
        </p>
        <ul class="socials">
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-google-plus"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-youtube"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-linkedin-square"></i></a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>copyright &copy;2022 <a href="#" class="a">interbus</a></p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "FooterC",
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fcfcfc;
  font-family: sans-serif;
}

footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(4, 3, 22);
  height: auto;
  width: 100vw;
  
  padding: 2px;
  color: #fff;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.footer-content h3 {
  font-size: 2.1rem;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 3rem;
  font-family: 'Courier New', Courier, monospace;
}

.footer-content p {
  max-width: 600px;
  margin: 15px ;
  line-height: 20px;
  font-size: 20px;
  color: #cacdd2;
  font-family: serif;
}

.socials {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
}

.socials li {
  margin: 0 10px;
}

.socials a {
  text-decoration: none;
  color: #fff;
  border: 1.1px solid white;
  padding: 5px;

  border-radius: 50%;
}

.socials a i {
  font-size: 1.1rem;
  width: 20px;

  transition: color 0.4s ease;
}

.socials a:hover i {
  color: aqua;
}

.footer-bottom {
  
  background: rgb(6, 6, 6);
  width: 100vw;
  padding: 20px;
  padding-bottom: 40px;
  text-align: center;
}

.footer-bottom p {
   text-align: center;
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
}

.footer-bottom p a {
   text-align: center;
  color: #44bae8;
  font-size: 16px;
  text-decoration: none;
}

.footer-bottom span {
   text-align: center;
  text-transform: uppercase;
  opacity: 0.4;
  font-weight: 200;
}

.footer-menu {
   text-align: center;
  float: right;
}

.footer-menu ul {
   text-align: center;
  display: flex;
}

.footer-menu ul li {
  padding-right: 10px;
  display: block;
}

.footer-menu ul li a {
  color: #cfd2d6;
  text-decoration: none;
}

.footer-menu ul li a:hover {
  color: #27bcda;
}


@media (max-width: 500px) {
  .footer-menu ul {
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}

.a{
  font-family: 'Courier New', Courier, monospace;
}
</style>