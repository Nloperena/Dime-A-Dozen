import React, {Component} from "react";
import "./Hostpage.css";

class Hostpage extends Component {
    render() {
        return(
            <div>
                    <div class="row">

                        <div class="col s3 pink lighten-3 host">
                        <h5>Host</h5>
                        </div>


                        </div>

                    <div class="row">

                        <div class="col s3 pink lighten-3 players details">
                        <h2>Players</h2>
                        </div>

                        <div class="col s9 blue lighten-3 details">
                        <h1>Rules</h1>
                        <div class="col s9 blue lighten-3" id ="rules">
                            <div class ="container">
                                <div class = "row">
                                    <div class = "col s12">
                                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAH
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class = "row">
                            <div class ="col s6">
                            <a class="waves-effect waves-light btn-large blue lighten-3"><i class="material-icons right" alt="">cloud</i>Dump</a>
                            </div>
                            <div class ="col s6">
                            <a class="waves-effect waves-light pulse btn-large pink lighten-3"><i class="material-icons right " alt="">cloud</i>Start</a>
                            </div>
                        </div>

            </div>
        )
    } 
}






export default Hostpage;