import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from "react-chartjs-2";

export const StatusTeam = () => {

  const { data: myData } = useSelector(state => state.myTeam)
  const acum = (a, b) => a + b;

  const teamPower = myData.map(hero => parseInt(hero.powerstats.power)).reduce(acum);
  const teamCombat = myData.map(hero => parseInt(hero.powerstats.combat)).reduce(acum);
  const teamDurability = myData.map(hero => parseInt(hero.powerstats.durability)).reduce(acum);
  const teamSpeed = myData.map(hero => parseInt(hero.powerstats.speed)).reduce(acum);
  const teamIntelligence = myData.map(hero => parseInt(hero.powerstats.intelligence)).reduce(acum);
  const teamStrength = myData.map(hero => parseInt(hero.powerstats.strength)).reduce(acum);

  const averageWeight = parseInt(myData.map(hero => parseInt(hero.appearance.weight[1].split(" ", 1))).reduce(acum) / myData.length);
  const averageHeight = parseInt(myData.map(hero => parseInt(hero.appearance.height[1].split(" ", 1))).reduce(acum) / myData.length);


  const representativeAbility = Math.max.apply(null, [teamPower, teamCombat, teamDurability, teamSpeed, teamIntelligence, teamStrength])

  const representativeAbilityActive = teamPower === representativeAbility ? "Power" :
    teamCombat === representativeAbility ? "Combat" :
      teamDurability === representativeAbility ? "Durability" :
        teamSpeed === representativeAbility ? "Speed" :
          teamIntelligence === representativeAbility ? "Intelligence" :
            teamStrength === representativeAbility ? "Strength" : null;

//Configuracion y datos a representar en la tabla dinamica 

  const data = {
    labels: ["intelligense", "strength", "speed", "durability", "power", "combat"],
    datasets: [
      {
        label: 'powerstats, of Team',
        data: [teamIntelligence, teamStrength, teamSpeed, teamDurability, teamPower, teamCombat],
        fill: false,
        backgroundColor: 'rgba(9, 255, 0, 0.8)',
        borderColor: 'rgba(9, 255, 0, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <div className="container-lg shadow bg__grey mt-4 p-3 animate__animated animate__fadeInDown  animate__faster">
        <div className=" row m-2" >
          <div className="col statusTeam  " >
            <div className='header'>
              <h1 className='title Fontligth'>My super hero team</h1>
            </div>
            <Line data={data} options={options} />
          </div>
          <div className=" col  align-self-center shadow-lg border p-3 Fontligth">
          
            <h4 className="fw-lighter pb-5 ">
              <i className="fas fa-users " ></i>
               Representative team skill: <strong>{representativeAbilityActive}</strong>
            </h4>
            <h5 className="fw-lighter">Average weight of my team: <strong>{averageWeight}kg</strong></h5>
            <h5 className="fw-lighter">Average height  of my team: <strong>{averageHeight}cm</strong></h5>
          </div>
        </div>
      </div>
    </>
  )
};

