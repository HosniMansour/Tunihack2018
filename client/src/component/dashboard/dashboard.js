import React, {Component} from 'react';
import Menu from "../Menu";
import "./dashboard.css"
import { getFin } from "../../actions/financeAction";

import {connect} from "react-redux";
import {AreaChart, PieChart,BarChart } from "react-d3-components"

export function OneYear(props) {

    let ar = [];
    let o = props.data.filter( (o) => {
        return o.year === props.y
    });

    let o2 = props.data.filter( (o) => {
        return o.year === props.y-1
    });

    let o3 = props.data.filter( (o) => {
        return o.year === props.y-2
    });

    ar = [];
    if(o[0]!=null){
        ar.push({x: "Titre I", y: o[0].recette_t_1.split(' ').join('')/1000000000});
        ar.push({x: "Titre II", y: o[0].recette_t_2.split(' ').join('')/1000000000});
        ar.push({x: "Fonds spéciaux", y: o[0].recette_f.split(' ').join('')/1000000000});
    }
    let data2 = {
        values: ar
    };

    ar = [];

    if(o[0]!=null){
        ar.push({x: o[0].year+"", y: o[0].montant.split(' ').join('')/1000000000});
    }

    if(o2[0]!=null){
        ar.push({x: o2[0].year+"", y: o2[0].montant.split(' ').join('')/1000000000});
    }

    if(o3[0]!=null){
        ar.push({x: o3[0].year+"", y: o3[0].montant.split(' ').join('')/1000000000});
    }

    let data3 = [{
        values: ar.reverse()
    }];

    return(
        <div className="row" id="portfolio-wrapper">
            <h1>Loi de finances {props.y}</h1>
            <div className="row" style={{marginTop:50}}>
                <div className="col-6">
                    <h4>Recettes :</h4>
                    <br/>
                    <BarChart
                        data={data2}
                        width={500}
                        height={400}
                        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
                </div>

                <div className="col-6">
                    <h3>Dernière 3 années</h3>
                    <br/>
                    <div style={{marginLeft:30}}>
                        <BarChart
                            data={data3}
                            width={500}
                            height={400}
                            margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Year(props) {

    var ar = [];

    if(props.data!==0){
        for (let i = 0; i < props.data.length; i++) {
            ar.push({x:props.data[i].year+"",y:parseInt(props.data[i].montant.split(' ').join(''))/(1000000000)});
        }
    }
    var data3 = [{
        values: ar.reverse()
    }];

    return(
        <div className="row" id="portfolio-wrapper">
            <h1>Loi de finances 2000 - 2018</h1>
            <div className="row">
                <div className="col-12" style={{marginTop:50}}>
                    <h4>Montant total en milliards :</h4>
                    <br/>
                    <BarChart
                        data={data3}
                        width={1100}
                        height={400}
                        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>,
                    <br/>
                </div>
            </div>
        </div>
    );
}

class Dashboard extends Component {


    constructor() {
        super();
        this.state = {
            year:0
        }
    }

    onClick(data){
        this.setState({
            year:data
        });
    }

    componentDidMount(){
        this.props.getFin();
        window.scrollTo(0, 0);
    }

    show(){
        if(this.state.year===0){
            return (<Year data={this.props.fin.fin}/>);
        }else{
            return (<OneYear y={this.state.year}  data={this.props.fin.fin} />);
        }
    }

    render() {
        return (
            <div>
                <div className="page-wrap">
                    <div className="main-menu">
                        <Menu/>
                    </div>
                    <br/><br/><br/>
                    <section id="portfolio">
                        <div className="container wow fadeInUp">
                            <div className="section-header">
                                <h3 className="section-title">Loi de Finances</h3>
                                <br/><br/>
                            </div>
                            <div className="row">

                                <div className="col-lg-12">
                                    <ul id="portfolio-flters">
                                        <li onClick={() => this.onClick(0)} className="filter-active">Tous</li>
                                        <li onClick={() => this.onClick(2018)}>2018</li>
                                        <li onClick={() => this.onClick(2017)}>2017</li>
                                        <li onClick={() => this.onClick(2016)}>2016</li>
                                        <li onClick={() => this.onClick(2015)}>2015</li>
                                        <li onClick={() => this.onClick(2014)}>2014</li>
                                        <li onClick={() => this.onClick(2013)}>2013</li>
                                        <li onClick={() => this.onClick(2012)}>2012</li>
                                        <li onClick={() => this.onClick(2011)}>2011</li>
                                        <li onClick={() => this.onClick(2010)}>2010</li>
                                        <li onClick={() => this.onClick(2009)}>2009</li>
                                        <li onClick={() => this.onClick(2008)}>2008</li>
                                        <li onClick={() => this.onClick(2007)}>2007</li>
                                        <li onClick={() => this.onClick(2006)}>2006</li>
                                        <li onClick={() => this.onClick(2005)}>2005</li>
                                        <li onClick={() => this.onClick(2004)}>2004</li>
                                        <li onClick={() => this.onClick(2003)}>2003</li>
                                        <li onClick={() => this.onClick(2002)}>2002</li>
                                        <li onClick={() => this.onClick(2001)}>2001</li>
                                        <li onClick={() => this.onClick(2000)}>2000</li>
                                    </ul>
                                </div>
                            </div>
                            {this.show()}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fin:state.fin
    };
};

export default connect(mapStateToProps,{getFin}) (Dashboard);
