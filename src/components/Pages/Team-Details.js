import React, { useState } from "react";
import { connect } from "react-redux";
import changeTeams from "../../actions";
const mapStateToProps = (state) => {
  return state.TeamsReducer || [];
};
//send object with team index and team data
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeTeams: (team) => dispatch(changeTeams(team)),
});

function TeamDetails(props) {
  var id = () => {
    var url = window.location.pathname;
    return parseInt(url.substring(url.lastIndexOf("/") + 1), 10) - 1;
  };

  const teamData = props.teams[id()];
  const handleDataChange = (value) => {
    alert("Data Updated");
    props.changeTeams(value);
  };

  var [name, setTeamName] = useState(teamData.name);
  var [founded, setFounded] = useState(teamData.founded);
  var [address, setTeamAddress] = useState(teamData.address);

  return (
    <div className="container shadow-sm p-5 rounded">
      <h3 className="text-center mb-3 border-bottom pb-4">
        {name}
        <img width="50px" src={teamData.logo} alt=""></img>
      </h3>
      <div className="row">
        <div className="col-md-8 offset-md-2 mx-auto">
          <div className="table-custom mt-5 mb-3">
            <div className="table-row font-weight-bold">
              <div className="table-col">
                <label>id</label>
                <input value={id()} type="text" disabled />
              </div>
              <div className="table-col">
                {" "}
                <label>name</label>
                <input
                  id="name"
                  value={name}
                  type="text"
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
              <div className="table-col">
                {" "}
                <label>founded</label>{" "}
                <input
                  id="founded"
                  value={founded}
                  type="number"
                  onChange={(e) => setFounded(e.target.value)}
                />{" "}
              </div>
              <div className="table-col">
                <label>address</label>
                <input
                  id="address"
                  value={address}
                  type="text"
                  onChange={(e) => setTeamAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            className="btn btn-dark float-right"
            onClick={() =>
              handleDataChange({
                id: id(),
                team: {
                  address: address,
                  founded: founded,
                  logo: teamData.logo,
                  name: name,
                },
              })
            }
          >
            update data
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetails);
