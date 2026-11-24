let cookie = document.querySelector("#choose_cookie");
let attri = document.getElementsById("cookie_name");
let color = attri.getAttribute("style");

// cookie.addEventListener("change", function(){
//     var ckName = document.getElementById("choose_cookie").value;
//     cookieName.textContent = ckName;
// });

function changeCookie(value){
    let cookieName = document.getElementById("cookie_name");
    if(value == "cookie01"){
        cookieName.innerHTML = "시간지기 쿠키";
        let history = document.getElementById("cookie_history").querySelector('p')
        history.innerHTML = "시간 수습 가위에 올라타 시간선의 확장을 본 후 시간선을 정리해 모든 적에게 피해를 입힌다. 시간지기 쿠키를 제외한 공격력이 가장 높은 적 3종(쿠키 우선)에게 다이얼락을 부여한다. 다이얼락은 제거, 면역, 종료 시 주변에 폭발 피해를 입히고 역행 상태로 만든다. 시간지기 쿠키는 적군 쿠키가 부활할 경우, 시간선의 불안정을 감지하여 그 즉시 긴급 다이얼락을 부여한다. 시간지기 쿠키는 시간선을 어지럽히는 무질서 사건이 일어날 경우 엔트로피를 축적하며, 최대치 도달 시 일정 시간동안 안정화 모드를 발동시킨다. 시간지기 쿠키는 전투 당 1회 시간을 역행하여 부활할 수 있고 다이얼락과 역행에 면역이다. 또한 토핑 쿨타임 감소에 비례해 공격력이 증가한다. 시간을 다루는 힘으로 가속권 효율이 10% 증가하며, 생산 건물에 배치하면, 해당 건물의 생산 시간이 5% 가속된다.";
    }
    else if(value == "cookie02"){
        cookieName.innerHTML = "천년나무 쿠키";
        let history = document.getElementById("cookie_history").querySelector('p')
        history.innerHTML = "이거 ㄹㅇ 되나요?";
    }
    else if(value == "cookie03"){
        cookieName.innerHTML = "지하명왕 쿠키";
    }

    else if(value == "cookie04"){
        cookieName.innerHTML = "쉐도우밀크 쿠키";
        attri.setAttribute("style", "color: rgb(133, 2, 2);");
    }
}