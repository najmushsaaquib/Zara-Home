const sidebar = () =>{
    return `<div id="menubar">
    <div id = "closemenu">
        <img class="close" src="/assets/images/transparentIMG.png" alt="close">
    </div>

    <div id="logo2">
        <img id="logoImg" src="https://static.zarahome.net/8/static4/itxwebstandard/images/logos/logo.svg?20220330020507" alt="">
    </div>

    <div id="categoriesDiv">
        <div>
            <a href="#"><p id="newIn">NEW IN</p></a>
            <div id="newOpen" class="divCon">
                <a href="#"><p>COLLECTION</p></a>
                <a href="/assets/pages/kids.html"><p>KIDS</p></a>
            </div>
        </div>

        <div>
            <a href="#"><p id="bedroom">BEDROOM</p></a>
            <div id="openRoom" class="divCon">
                <a href="/assets/pages/bedsheet_duvet.html"><p>DUVET COVERS</p></a>
                <a href="/assets/pages/flatsheet.html"><p>FLAT SHEETS</p></a>
                <a href="#"><p>PILLOWCASES</p></a>
                <a href="#"><p>FITTED SHEETS</p></a>
                <a href="#"><p>QUILTS</p></a>
                <a href="#"><p>BEDSPREADS</p></a>
                <a href="/assets/pages/blanket.html"><p>BLANKETS</p></a>
                <a href="#"><p>CUSHIONS</p></a>
                <a href="/assets/pages/curtain.html"><p>CURTAINS</p></a>
            </div>
        </div>

        <div>
            <a href="#"><p id="clothing">CLOTHING & FOOTWEAR</p></a>
            <div id="openClothing" class="divCon">
                <a href="/assets/pages/women.html"><p>WOMEN</p></a>
                <a href="#"><p>MEN</p></a>
                <a href="/assets/pages/footwear.html"><p>FOOTWEAR</p></a>
                <a href="#"><p>ACCESSORIES</p></a>
            </div>
        </div>

        
        <div>
            <a href="#"><p id="livingroom">LIVING ROOM</p></a>
            <div id="openliving" class="divCon">
                <a href="/assets/pages/furniture.html"><p>FURNITURE & RUGS</p></a>
                <a href="#"><p>PHOTO FRAMES</p></a>
                <a href="#"><p>BASKETS</p></a>
                <a href="#"><p>VASES</p></a>
                <a href="#"><p>DECORATIVE CUSHIONS</p></a>
                <a href="/assets/pages/curtain.html"><p>CURTAINS</p></a>
                <a href="#"><p>DOOR KNOBS</p></a>
                <a href="#"><p>DECOR ACCESSORIES</p></a>
            </div>
        </div>


        <div>
            <a href="#"><p id="dinning">DINING</p></a>
            <div id="openDinning" class="divCon">
                <a href="/assets/pages/#.html"><p>TABLECLOTHS</p></a>
                <a href="/assets/pages/#.html"><p>NAPKINS</p></a>
                <a href="/assets/pages/#.html"><p>PLACEMATS</p></a>
                <a href="/assets/pages/#.html"><p>TABLE ACCESSORIES</p></a>
            </div>
        </div>

        
        <div>
            <a href="#"><p id="bath">BATHROOM</p></a>
            <div id="openbathroom" class="divCon">
                <a href="/assets/pages/towel.html"><p>TOWELS</p></a>
                <a href="/assets/pages/bathrob.html"><p>BATHROBES</p></a>
                <a href="#"><p>BATHROOM ACCESSORIES</p></a>
            </div>
        </div>

        <div>
            <a href="#"><p id="kidsSec">KIDS</p></a>
            <div id="openkidsSec" class="divCon">
                <a href="/assets/pages/bedsheet_duvet.html"><p>Duvet covers</p></a>
                <a href="/assets/pages/flatsheet.html"><p>Flat sheets</p></a>
                <a href="#"><p>Fitted sheets</p></a>
                <a href="#"><p>Pillowcases</p></a>
                <a href="#"><p>Quilts and bedspreads</p></a>
                <a href="/assets/pages/blanket.html"><p>Blankets</p></a>
                <a href="#"><p>Cushions</p></a>
            </div>
        </div>

        <div>
            <a href="#"><p id="information">+ INFO</p></a>
            <div id="openInfo" class="divCon">
                <a href="https://www.zarahome.com/gb/shop-guide.html?section=1" target = "_blank"><p>HELP</p></a>
                <a href="https://www.zarahome.com/gb/contact-shopping-online.html" target = "_blank"><p>CONTACT US</p></a>
                <a href="https://www.zarahome.com/ww/guest-orders.html" target = "_blank"><p>GUEST PURCHASE</p></a>
            </div>
        </div>

        
        <div>
            <a href="#"><p id="modallgOut">Logout</p></a>
            
        </div>

    </div>
</div>`
}

export default sidebar;