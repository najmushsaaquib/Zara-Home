const header = () =>{
    return `<div id="navbar">
    <div id="menudiv"><i id="menu" class="material-icons">
        menu
        </i></div>
    <div id="logo"><a href="/assets/pages/zarahome.html"><img src="/assets/images/Zara home white logo.png" alt="zara-home"></a></div>
    <div id="searchBox"><div><a href="#">SEARCH</div></a><a href="#"><div id="searchline"></div></a></div>
    <div id="login_basketDiv">
        <div id="loginicon">
            <div><img src="https://bit.ly/3tMdlRC" alt="login"></div>
            <div><p>LOG IN</p></div>
        </div>
        <div id="basketicon">
            <div><img src="/assets/images/basket icon.png" alt="basket"></div>
            <div><p>BASKET<span id="basketCount"><span>(1)</span></span></p></div>
        </div>
    </div>
</div>
</div>`
}

export default header;