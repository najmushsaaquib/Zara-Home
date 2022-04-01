const header = () =>{
    return `<div id="navbar">
    <div id="menudiv"><i id="menu" class="material-icons">
        menu
        </i></div>
    <div id="logo"><a href="/assets/pages/zarahome.html"><img id = "menuopenDiv" src="/assets/images/logo.png" alt="zara-home"></a></div>
    <div id="searchBox"><div>SEARCH</div><div id="searchline"></div></div>
    <div id="login_basketDiv">
        <div id="loginicon">
            <div><img src="/assets/images/login icon.png" alt="login"></div>
            <div><p>LOG IN</p></div>
        </div>
        <div id="basketicon">
            <div><img src="/assets/images/basket icon 2.png" alt="basket"></div>
            <div><p>BASKET<span id="basketCount"><span>(1)</span></span></p></div>
        </div>
    </div>
</div>
</div>`
}

export default header;