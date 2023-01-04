
window.onload = (event) => {
    setTimeout(function () {
        const s0000_header_col_middle_section_id = document.getElementById("s0000_header_col_middle_section_id");
        const headernavMenuWrapper = elementMaker("div", ["header_nav_menu_wrapper"]);
        s0000_header_col_middle_section_id.appendChild(headernavMenuWrapper);
        const navUl = elementMaker('ul', ["navul_wrapper"]);
        headernavMenuWrapper.appendChild(navUl);
        const NavListItem1 = elementMaker("li", ["nav_list_item"], "home_btn_id");
        NavListItem1.innerText = `Home`;
        navUl.appendChild(NavListItem1);
        NavListItem1.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/")
        });

        const NavListItem2 = elementMaker("li", ["nav_list_item"], "about_btn_id");
        NavListItem2.innerText = `About Us`;
        navUl.appendChild(NavListItem2);
        NavListItem2.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/page/about");
        });

        const NavListItem3 = elementMaker("li", ["nav_list_item"], "contact_btn_id");
        NavListItem3.innerText = `Contact`;
        navUl.appendChild(NavListItem3);
        NavListItem3.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/page/contact");
        });

        const NavListItem4 = elementMaker("li", ["nav_list_item", "traning_option_style_class"]);
        NavListItem4.innerText = `Traning`;
        navUl.appendChild(NavListItem4);

        const NavListItem5 = elementMaker("li", ["nav_list_item", "country_option_style_class"]);
        NavListItem5.innerText = `Country`;
        navUl.appendChild(NavListItem5);

        const NavListItem6 = elementMaker("li", ["nav_list_item"], "blog_btn_id");
        NavListItem6.innerText = `Blog`;
        navUl.appendChild(NavListItem6);
        NavListItem6.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/page/blog");
        });

        const NavListItem7 = elementMaker("li", ["nav_list_item", "Online_application_btn"], "Online_application_btn_id");
        NavListItem7.innerText = `Apply Online`;
        navUl.appendChild(NavListItem7);
        NavListItem7.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/page/apply");
        });


        // sub item for traning
        const sub_Ul_Item_Wrapper = elementMaker("ul", ["sub_Ul_Item_Wrapper"]);
        NavListItem4.appendChild(sub_Ul_Item_Wrapper);

        const subList_Traning_student = elementMaker("li", ["nav_list_item"], "for_student_btn_id");
        subList_Traning_student.innerText = `For Student`;
        sub_Ul_Item_Wrapper.appendChild(subList_Traning_student);
        subList_Traning_student.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/page/students");
        });

        const subList_Traning_job = elementMaker("li", ["nav_list_item"], "for_job_btn_id");
        subList_Traning_job.innerText = `For Job`;
        sub_Ul_Item_Wrapper.appendChild(subList_Traning_job);
        subList_Traning_job.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/page/job");
        });

        // sub item for country
        const sub_Ul_Item_Wrapper2 = elementMaker("ul", ["sub_Ul_Item_Wrapper"]);
        NavListItem5.appendChild(sub_Ul_Item_Wrapper2);

        const Country1 = elementMaker("li", ["nav_list_item"], "japan_btn_id");
        Country1.innerText = `Japan`;
        sub_Ul_Item_Wrapper2.appendChild(Country1);
        Country1.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/page/japan");
        });


        const s0000_ecommerce_menu_wrapper = document.querySelector(".s0000_ecommerce_menu_wrapper");

        const Mobile_device_homeBtn = elementMaker("li", ["mobile_device_home_btn"]);
        Mobile_device_homeBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.988" viewBox="0 0 20 19.988"> <path id="Home" d="M.732,7.561,7.053,1.239a4.173,4.173,0,0,1,5.893,0l6.321,6.322A2.482,2.482,0,0,1,20,9.329v8.181a2.5,2.5,0,0,1-2.5,2.5H2.5a2.5,2.5,0,0,1-2.5-2.5V9.329A2.482,2.482,0,0,1,.732,7.561ZM7.5,18.343h5V15.064a2.5,2.5,0,1,0-5,0Zm-5.833-.833a.833.833,0,0,0,.833.833H5.833V15.064a4.167,4.167,0,0,1,8.333,0v3.278H17.5a.833.833,0,0,0,.833-.833V9.329a.84.84,0,0,0-.244-.589L11.768,2.42a2.507,2.507,0,0,0-3.537,0L1.911,8.742a.84.84,0,0,0-.244.587Z" transform="translate(0 -0.021)" fill="#1e272e"></path> </svg>
        `;
        s0000_ecommerce_menu_wrapper.appendChild(Mobile_device_homeBtn);
        Mobile_device_homeBtn.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/");
        });

        const Mobile_device_ApplyBtn = elementMaker("li", ["mobile_device_apply_btn"]);
        Mobile_device_ApplyBtn.innerHTML = `
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M371 4840 c-162 -24 -313 -162 -355 -325 -24 -89 -24 -1271 0 -1360
43 -168 189 -297 364 -325 41 -6 481 -10 1193 -10 l1127 0 0 -549 c0 -475 -2
-550 -15 -561 -11 -9 -18 -10 -28 -1 -8 6 -67 127 -133 268 -102 219 -126 265
-169 309 -51 53 -119 84 -185 84 -102 0 -212 -80 -245 -179 -36 -110 -39 -102
283 -789 178 -379 312 -652 342 -697 252 -373 740 -526 1160 -364 158 61 310
170 310 223 0 34 -41 76 -73 76 -14 0 -51 -19 -83 -43 -163 -119 -314 -170
-504 -170 -165 1 -313 43 -448 130 -78 49 -193 163 -243 239 -61 95 -609 1270
-609 1308 0 80 84 137 155 103 19 -9 41 -27 49 -39 8 -13 67 -135 132 -273 64
-137 124 -259 133 -272 32 -43 87 -66 151 -61 72 5 122 37 150 94 19 39 20 63
20 823 0 871 -4 823 68 857 45 21 84 11 122 -32 l30 -35 0 -624 0 -624 23 -25
c32 -36 74 -39 107 -6 18 18 20 33 20 141 0 140 12 178 65 203 41 20 58 20 95
1 50 -26 60 -59 60 -198 0 -111 2 -127 21 -151 26 -33 79 -36 109 -6 16 16 20
33 20 96 0 88 17 132 59 157 36 21 63 22 101 2 49 -25 60 -51 60 -140 0 -90
13 -125 51 -139 59 -20 91 6 104 86 13 81 89 127 154 94 65 -34 62 -13 59
-558 -3 -486 -4 -494 -27 -563 -13 -38 -39 -100 -57 -137 -40 -80 -42 -101 -9
-133 31 -32 74 -33 103 -2 30 31 86 157 113 252 23 78 23 93 27 593 3 504 2
515 -18 557 -30 62 -98 121 -161 139 -67 20 -91 20 -157 -3 l-54 -19 -41 45
c-61 66 -108 87 -192 88 -46 0 -81 -6 -103 -17 l-32 -17 -54 54 c-78 78 -164
100 -273 69 l-23 -6 0 171 0 171 728 0 c441 0 753 4 792 10 175 28 321 157
364 325 24 89 24 1271 0 1360 -43 168 -192 300 -364 325 -38 6 -787 10 -1823
10 -1524 0 -1762 -2 -1786 -15 -47 -24 -56 -78 -18 -113 l23 -22 1804 -2 1805
-3 57 -28 c61 -30 105 -74 140 -140 l23 -42 0 -650 0 -650 -23 -42 c-35 -66
-79 -110 -140 -140 l-57 -28 -762 -3 -763 -3 0 153 c0 173 -7 210 -53 270 -77
101 -217 132 -326 73 -114 -63 -141 -128 -141 -347 l0 -148 -1162 2 -1163 3
-57 28 c-61 30 -105 74 -140 140 l-23 42 0 650 0 650 23 42 c35 66 79 110 140
140 l57 28 252 3 253 4 20 25 c33 42 25 85 -21 108 -22 12 -72 15 -241 14
-117 -1 -237 -5 -267 -9z"/>
<path d="M985 4336 c-17 -7 -35 -19 -41 -27 -15 -19 -344 -890 -344 -911 0
-71 106 -98 138 -35 7 12 24 56 40 97 l28 75 211 3 210 2 33 -87 c36 -98 57
-123 105 -123 39 0 65 26 65 66 0 48 -330 914 -354 929 -35 22 -60 25 -91 11z
m111 -449 l72 -192 -145 -3 c-80 -1 -148 -1 -150 2 -6 6 141 395 147 389 2 -2
37 -90 76 -196z"/>
<path d="M1679 4340 c-14 -6 -31 -22 -38 -36 -8 -17 -11 -158 -11 -474 l0
-449 23 -25 c32 -36 74 -39 107 -6 18 18 20 33 20 184 l0 163 118 6 c71 3 136
12 164 22 62 22 142 94 176 159 23 44 27 63 27 141 0 78 -4 97 -27 141 -34 65
-114 137 -176 159 -56 20 -341 31 -383 15z m305 -150 c74 -17 125 -72 133
-143 7 -60 -11 -110 -52 -146 -45 -39 -91 -51 -197 -51 l-88 0 0 175 0 175 83
0 c45 0 100 -5 121 -10z"/>
<path d="M2514 4336 c-17 -7 -34 -21 -38 -31 -8 -22 -8 -918 0 -940 10 -26 62
-44 94 -33 43 14 50 45 50 213 l0 155 84 0 c199 0 316 61 379 198 30 66 30
188 0 254 -32 70 -94 131 -166 163 -58 27 -73 29 -217 32 -119 3 -162 0 -186
-11z m365 -169 c47 -31 81 -91 81 -142 0 -51 -34 -111 -81 -142 -36 -24 -52
-27 -150 -31 l-109 -5 0 178 0 178 109 -5 c98 -4 114 -7 150 -31z"/>
<path d="M3363 4342 c-53 -8 -53 -10 -53 -508 0 -440 1 -463 19 -485 18 -23
25 -24 172 -27 173 -4 212 1 240 29 25 25 24 74 -1 99 -18 18 -33 20 -150 20
l-130 0 0 409 c0 391 -1 409 -20 433 -21 28 -42 36 -77 30z"/>
<path d="M3865 4338 c-30 -16 -45 -39 -45 -67 0 -15 54 -108 138 -235 l137
-211 0 -227 c0 -220 1 -228 22 -249 26 -26 76 -28 103 -4 15 14 18 45 25 251
l7 235 134 208 c82 126 134 217 134 232 0 60 -86 91 -127 47 -12 -13 -64 -90
-117 -173 -54 -82 -100 -151 -104 -152 -4 -2 -53 68 -110 156 -56 87 -110 165
-120 173 -25 23 -54 29 -77 16z"/>
</g>
</svg>
        `;
        s0000_ecommerce_menu_wrapper.appendChild(Mobile_device_ApplyBtn);
        Mobile_device_ApplyBtn.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/page/apply");
        });



        function elementMaker(name, className, id) {
            try {
                let element = document.createElement(name);
                className && (element.className = className.join(" "));
                id && (element.id = id);
                return element;
            } catch (err) {
                console.log(err.message);
            };
        };

        function setAttributes(elementName, allAttributes) {
            for (let key in allAttributes) {
                elementName.setAttribute(key, allAttributes[key]);
            };
        };
    }, 1350);
};