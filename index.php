<!doctype html>
<html>
<head>
    <title></title>

    <meta charset="utf-8">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="main.js" type="text/javascript"></script>
    
    <link rel="stylesheet" type="text/css" href="main.css">
    <link rel="stylesheet" type="text/css" href="animations.css">
</head>
<body>
    <nav>
        <ul>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
        </ul>
    </nav>
    <header>
        <section id="header-overlay"></section>
        <section id="name">
            <h1><span>Ocularus</span>Designs</h1>
        </section>
        <section id="header-mountains">
            <img src="images/mountain-top-2.png" alt="top" width="100%">
        </section>
    </header>
    <section id="about">
        <p>We design and develop websites and web-based applications, with data-driven technologies when necessary. Let us give you a web presence your competitors will envy.</p>
    </section>
    <section id="works">
        <img src="images/stalactites.png" width="100%">
        <div id="works-title">
            <h1>Works</h1>
            <div class="bar1"></div>
            <div class="bar2"></div>
        </div>
        <div id="gallery">
            <div id="img-1">
                <p>Bioshock</p>
            </div>
            <div id="img-2">
                <p>Dean's Designs</p>
            </div>
            <div id="img-3">
                <p>Codepen</p>
            </div>
            <div id="img-4">
                <p>Solar System</p>
            </div>
            
            <div id="buttons">
                <div id="btn-1"><div class="inner"></div></div>
                <div id="btn-2"><div class="inner"></div></div>
                <div id="btn-3"><div class="inner"></div></div>
                <div id="btn-4"><div class="inner"></div></div>
            </div>
        </div>
        
        
        
        <img src="images/stalacmites.png" width="100%" id="works-top">
    </section>
    <section id="contact">
        <div id="contact-title">
            <h1>Contact Us</h1>
            <div class="bar3"></div>
            <div class="bar4"></div>
        </div>
        <?php
        if (isset($_POST['Submit'])) {

            //Your Email
            $Admin_Email = "f55004583@leeschools.net";
            //There Email
            $User_Email = $_POST['email'];
            //Subject
            $Subject = $_POST['subject'];
            //Message
            $Message = $_POST['message'];
            //Sending the mail
            mail($Admin_Email, "$Subject", $Message, "From:" . $User_Email);
            //You Can respond here Like Thanks For Emailing!!
        }
        else{
        ?>
        <section id="form-container">
            <form action="index.php" method="post">
                <input placeholder="Email" name="email" type="text" id="email" /><br />
                <input placeholder="Subject" name="subject" type="text" id="subject"/><br />
                <textarea placeholder="Message" name="message" rows="10" cols="40" id="message"></textarea><br />
                <input type="submit" value="Send" name="Submit" id="submit"/>
                <input type="reset" value="Reset" id="reset"/>
            </form>
        </section>
        <?php
        }
        ?>

            
        
    </section>









</body>
</html>