const header = () =>{
    return `<div id="navbar">
    <div id="menudiv"><i id="menu" class="material-icons">
        menu
        </i></div>
    <div id="logo"><a href="/assets/pages/zarahome.html"><img id = "menuopenDiv" src="/assets/images/Zara home white logo.png" alt="zara-home"></a></div>
    <div id="searchBox"><div>SEARCH</div><div id="searchline"></div></div>
    <div id="login_basketDiv">
        <div id="loginicon">
            <div><img src="https://bit.ly/3tMdlRC" alt="login"></div>
            <div><p  id = "modallogin">LOG IN</p></div>
        </div>
        <div id="basketicon">
            <div><img src="/assets/images/basket icon.png" alt="basket"></div>
            <div><p id = "addtocart">BASKET</p></div>
        </div>
    </div>
</div>
</div>`
}

export default header;