
import './App.css';
import Background from './bg.jpeg';
import Airtable from 'airtable';
import { useEffect, useState } from 'react';

const base = new Airtable({ apiKey: 'keyC0nR1e39lOmrhm' }).base('apphBomMb49ieU17N');

var backgroundstyle = {
    width: "auto",
    height: "auto",
    backgroundImage: `url(${Background})`
};

function Customer() {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        base('customer')
            .select({ view: 'Grid view' })
            .eachPage((records, fetchNextPage) => {
                //console.log(records);
                fetchNextPage();
                setCustomer(records);
            })
    }, [])

    const [newname, setname] = useState('');
    const onChangename = (event) => {
        setname(event.target.value);
    };
    const [newphone, setphone] = useState('');
    const onChangephone = (event) => {
        setphone(event.target.value);
    };
    const [newyear, setyear] = useState('');
    const onChangeyear = (event) => {
        setyear(event.target.value);
    };
    const [newmonth, setmonth] = useState('');
    const onChangemonth = (event) => {
        setmonth(event.target.value);
    };
    const [newday, setday] = useState('');
    const onChangeday = (event) => {
        setday(event.target.value);
    };
    const newbirth = newyear + '-' + newmonth + '-' + newday;
    const [newprofession, setprofession] = useState('');
    const onChangeprofession = (event) => {
        setprofession(event.target.value);
    };
    const [newemail, setemail] = useState('');
    const onChangeemail = (event) => {
        setemail(event.target.value);
    };
    const [newaddress, setaddress] = useState('');
    const onChangeaddress = (event) => {
        setaddress(event.target.value);
    };
    const [newintro, setintro] = useState('');
    const onChangeintro = (event) => {
        setintro(event.target.value);
    };
    const [newnum, setnum] = useState('');
    const onChangenum = (event) => {
        setnum(event.target.value);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          checkbox();
        }, 500);
        return () => clearInterval(interval);
      },[]);

    let idbox = [];
    let idboxes2 = [];

    localStorage.removeItem('selectedid');

    return (
        <>
            <div style={backgroundstyle}>
                <div class="heads">
                    <a href="/#">
                        <h1 align="center">SCHRAMM</h1>
                    </a>
                    <div align="right" class="button1">
                        <input type="text" id="search" placeholder="搜尋" style={{ color: "black" }} />
                        <button type="button" class="badge rounded-pill bg-success" style={{ width: "80px", height: "40px", color:"white"}} data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">新增</button>
                        <button type="button" class="badge rounded-pill bg-warning" style={{ width: "80px", height: "40px", color:"white"}} onclick="checkbox(),select()" data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo" id="change">修改</button>
                        <button type="button" class="badge rounded-pill bg-danger" style={{ width: "80px", height: "40px", color:"white"}} id="delete" onclick="delete2()">刪除</button>
                        <button type="button" class="btn btn-primary">登出</button>
                    </div>
                    <br />
                </div>
                <div class="container">
                    <table class="table table-striped table-hover table-light" id="customer">
                        <thead>
                            <tr>
                                <th scope="col"><input type="checkbox" onClick={checkAll} name="chk[]" /> 全選</th>
                                <th scope="col">姓名</th>
                                <th scope="col">電話</th>
                                <th scope="col">生日</th>
                                <th scope="col">職業</th>
                                <th scope="col">信箱</th>
                                <th scope="col">住址</th>
                                <th scope="col">介紹人</th>
                                <th scope="col">統編</th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                            {customer.map(customer => 
                                <tr>
                                    <th scope="row"><input type="checkbox" id={customer.id}/></th>
                                    <td>{customer.fields.cus_name}</td>
                                    <td>{customer.fields.cus_phone}</td>
                                    <td>{customer.fields.cus_birth}</td>
                                    <td>{customer.fields.cus_profession}</td>
                                    <td>{customer.fields.cus_email}</td>
                                    <td>{customer.fields.cus_address}</td>
                                    <td>{customer.fields.cus_intro}</td>
                                    <td>{customer.fields.cus_num}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">新增顧客資料</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">姓名：</label>
                                        <input type="text" class="form-control" id="name" name="cus_name" value={newname} onChange={onChangename} required />
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">電話：</label>
                                        <input type="text" class="form-control" id="phone" placeholder="09xxxxxxxx" name="cus_phone" value={newphone} onChange={onChangephone} required />
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">生日：</label>
                                        <select id="year" value={newyear} onChange={onChangeyear}>
                                            <option>年</option>
                                            <option>1911</option><option>2000</option><option>2001</option><option>2002</option><option>2003</option>
                                            <option>2004</option><option>2005</option><option>2006</option><option>2007</option><option>2008</option>
                                            <option>2009</option><option>2010</option><option>2011</option><option>2012</option><option>2013</option>
                                            <option>2014</option><option>2015</option><option>2016</option><option>2017</option><option>2018</option>
                                            <option>2019</option><option>2020</option>
                                        </select>
                                        <select id="month" value={newmonth} onChange={onChangemonth}>
                                            <option>月</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </select>
                                        <select id="day" value={newday} onChange={onChangeday}>
                                            <option>日</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                            <option>31</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">職業：</label>
                                        <select class="form-control" id="profession" name="cus_profession" value={newprofession} onChange={onChangeprofession} required>
                                            <option>請選擇 · · ·</option>
                                            <option>00一般職業</option>
                                            <option>01農牧業</option>
                                            <option>02漁業</option>
                                            <option>03林材森林業</option>
                                            <option>04礦業採石業</option>
                                            <option>05交通運輸業</option>
                                            <option>06餐旅業</option>
                                            <option>07建築工程業</option>
                                            <option>08製造業</option>
                                            <option>09新聞廣告業</option>
                                            <option>10衛生保健業</option>
                                            <option>11娛樂業</option>
                                            <option>12文教機構</option>
                                            <option>13宗教團體</option>
                                            <option>14公共事業</option>
                                            <option>15一般商業</option>
                                            <option>16服務業</option>
                                            <option>17家庭管理</option>
                                            <option>18治安人員</option>
                                            <option>19軍人</option>
                                            <option>20資訊業</option>
                                            <option>21職業運動人員</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">信箱：</label>
                                        <input type="text" class="form-control" id="email" placeholder="xxx@mail.com" name="cus_email" value={newemail} onChange={onChangeemail} required />
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">住址：</label>
                                        <input type="text" class="form-control" id="address" name="cus_address" value={newaddress} onChange={onChangeaddress} required />
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">介紹人：</label>
                                        <input type="text" class="form-control" id="intro" name="cus_intro" value={newintro} onChange={onChangeintro} required />
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">統編：</label>
                                        <input type="text" class="form-control" id="num" placeholder="xxxx-xxxx" name="cus_num" value={newnum} onChange={onChangenum} required />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                                <button type="submit" class="btn btn-primary" onClick={handleClick} data-dismiss="modal">新增</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">修改顧客資料</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">姓名：</label>
                                        <input type="text" class="form-control" id="name1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">電話：</label>
                                        <input type="text" class="form-control" id="phone1" placeholder="09xxxxxxxx" minlength="10" maxlength="10" />
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">生日：</label>
                                        <select id="year1">
                                            <option>年</option>
                                            <option>1911</option>
                                            <option>2000</option>
                                            <option>2001</option>
                                            <option>2002</option>
                                            <option>2003</option>
                                            <option>2004</option>
                                            <option>2005</option>
                                            <option>2006</option>
                                            <option>2007</option>
                                            <option>2008</option>
                                            <option>2009</option>
                                            <option>2010</option>
                                            <option>2011</option>
                                            <option>2012</option>
                                            <option>2013</option>
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                        </select>
                                        <select id="month1">
                                            <option>月</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </select>
                                        <select id="day1">
                                            <option>日</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                            <option>31</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">職業：</label>
                                        <select class="form-control" id="profession1">
                                            <option>請選擇 · · ·</option>
                                            <option>00一般職業</option>
                                            <option>01農牧業</option>
                                            <option>02漁業</option>
                                            <option>03林材森林業</option>
                                            <option>04礦業採石業</option>
                                            <option>05交通運輸業</option>
                                            <option>06餐旅業</option>
                                            <option>07建築工程業</option>
                                            <option>08製造業</option>
                                            <option>09新聞廣告業</option>
                                            <option>10衛生保健業</option>
                                            <option>11娛樂業</option>
                                            <option>12文教機構</option>
                                            <option>13宗教團體</option>
                                            <option>14公共事業</option>
                                            <option>15一般商業</option>
                                            <option>16服務業</option>
                                            <option>17家庭管理</option>
                                            <option>18治安人員</option>
                                            <option>19軍人</option>
                                            <option>20資訊業</option>
                                            <option>21職業運動人員</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">信箱：</label>
                                        <input type="text" class="form-control" id="email1" placeholder="xxx@mail.com" />
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">住址：</label>
                                        <input type="text" class="form-control" id="address1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">介紹人：</label>
                                        <input type="text" class="form-control" id="intro1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">統編：</label>
                                        <input type="text" class="form-control" id="num1" placeholder="xxxx-xxxx" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                                <button type="button" class="btn btn-primary" onclick="updated()">修改</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    function handleClick() {
        base('customer').create({
            "cus_name": newname,
            "cus_phone": newphone,
            "cus_birth": newbirth,
            "cus_profession": newprofession,
            "cus_email": newemail,
            "cus_address": newaddress,
            "cus_intro": newintro,
            "cus_num": newnum,
        }, function (err, record) {
            if (err) {
                console.error(err);
                return;
            }
            console.log(record.fields);
        });
    }
    function checkAll() {
        var checkboxes = document.getElementsByTagName('input');
        var val = null;
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type === 'checkbox') {
                if (val === null)
                    val = checkboxes[i].checked;
                checkboxes[i].checked = val;
            }
        }
    }

    function checkbox() {
        var idboxes = [];
        var checkboxes = document.getElementsByTagName('input');
        var count = 0;
        document.getElementById("change").disabled = true;
        document.getElementById("change").setAttribute("class", "badge rounded-pill bg-secondary");
        document.getElementById("delete").disabled = true;
        document.getElementById("delete").setAttribute("class", "badge rounded-pill bg-secondary");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type === 'checkbox') {
                if (checkboxes[i].checked) {
                    count += 1;
                    //localStorage.setItem('num', i);
                    //alert(i - 1);
                    if (count === 1) {
                        //console.log(i-1);
                        document.getElementById("change").disabled = false;
                        document.getElementById("change").setAttribute("class", "badge rounded-pill bg-warning");
                        localStorage.setItem('selectedid', idbox[i - 1]);
                    } else {
                        document.getElementById("change").disabled = true;
                        document.getElementById("change").setAttribute("class", "badge rounded-pill bg-secondary");
                    }
                    if (count > 0) {
                        document.getElementById("delete").disabled = false;
                        document.getElementById("delete").setAttribute("class", "badge rounded-pill bg-danger");
                        idboxes.push(idbox[i - 1]);
                    }
                }
                localStorage.setItem('count', count);
                //console.log(localStorage.getItem('selectedid'));
                //console.log(idboxes);
            }
        }
        for (let i = 0; i < idboxes.length; i++) {
            idboxes2[i] = idboxes[i];
        }
    }
}


export default Customer;
