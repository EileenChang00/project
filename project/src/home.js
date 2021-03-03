
import './App.css';
//import ReactDOM from 'react-dom';
import Background from './bg.jpeg';
import {
    //BrowserRouter as Router,
    //Switch,
    //Route,
    Link
} from 'react-router-dom';

var backgroundstyle = {
    width: "auto",
    height: "auto",
    backgroundImage: `url(${Background})`
};

function home() {
    //setInterval(tick, 1000);
    return (
        <div style={backgroundstyle}>
            <div class="d-flex" id="wrapper">

                <div class="bg-light border-right" id="sidebar-wrapper">
                    <div class="sidebar-heading">SCHRAMM </div>
                    <div class="list-group list-group-flush">
                        <div>基本資料表</div>
                        <Link to="/customer"><a href="/#" class="list-group-item list-group-item-action bg-light">顧客資料表</a></Link>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">員工資料表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">產品資料表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">製造商資料表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">廠商資料表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">廠商人員資料表</a>
                        <div>進階資料表</div>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">預約資料表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">來訪資料表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">購買資料表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">售後服務資料表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">拜訪資料表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">贈品資料表</a>
                        <div>報表</div>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">營業報表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">熱銷報表</a>
                        <a href="/#" class="list-group-item list-group-item-action bg-light">介紹次數報表</a>
                    </div>
                </div>

                <div id="page-content-wrapper">

                    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        {/* <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button> */}
                        <div id="time"></div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <Link to="/#"><a class="nav-link" href="/#">公告 <span class="sr-only">(current)</span></a></Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">預約</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">來訪</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">購買</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        設定
          </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="/changepw">員工更改密碼</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="/changemenu">選單修改</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div class="container-fluid">
                        <h1 class="mt-4">公告</h1>
                        <p>預約</p>
                        <table border="1" cellpadding="5" align="center">
                            <tr>
                                <td><font color="white">日期時段</font></td>
                                <td><font color="white">顧客姓名</font></td>
                                <td><font color="white">顧客電話</font></td>
                                <td><font color="white">員工姓名</font></td>
                            </tr>
                            <tr>
                                <td><font color="white">2021/01/02,08:30</font></td>
                                <td><font color="white">王小明</font></td>
                                <td><font color="white">0921233123</font></td>
                                <td><font color="white">王大名</font></td>
                            </tr>
                        </table>
                        <p></p>
                        <p>售後服務</p>
                        <table border="1" cellpadding="5" align="center">
                            <tr>
                                <td><font color="white">日期時段</font></td>
                                <td><font color="white">顧客姓名</font></td>
                                <td><font color="white">顧客電話</font></td>
                                <td><font color="white">員工姓名</font></td>
                                <td><font color="white">服務項目</font></td>
                            </tr>
                            <tr>
                                <td><font color="white">2021/01/02,08:30</font></td>
                                <td><font color="white">王小明</font></td>
                                <td><font color="white">0921233123</font></td>
                                <td><font color="white">王大名</font></td>
                                <td><font color="white">翻床墊</font></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );

    // function tick() {
    //     const element = (
    //       <div>
    //         <h3>{new Date().toLocaleTimeString()}</h3>
    //       </div>
    //     );
    //     ReactDOM.render(element, document.getElementById('time'));
    //   }
}


export default home;
