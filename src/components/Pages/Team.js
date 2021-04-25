import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return state.TeamsReducer || [];
};
function Team(props) {
  const teamslist = props.teams || [];
  let teamInfo = teamslist.map((teamInfo, index) => (
    <Link
      key={index + 1}
      to={"/team-details/" + (index + 1)}
      className="rowLink"
    >
      <div className="table-row">
        <div className="table-col"> {index + 1} </div>
        <div className="table-col"> {teamInfo.name} </div>
        <div className="table-col"> {teamInfo.founded} </div>
        <div className="table-col"> {teamInfo.address} </div>
        <div className="table-col">
          <img width="50px" src={teamInfo.logo} alt=""></img>{" "}
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="container shadow-sm p-5 rounded">
      <h3 className="text-center mb-3">Data Table for team members</h3>

      <div className="row">
        <div className="col-md-8 offset-md-2 mx-auto">
          <div className="table-custom">{teamInfo}</div>
        </div>
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(Team);
