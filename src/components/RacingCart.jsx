import React from 'react'

function RacingCart({company, index}) {
  return (
    <div className="racing-graph">
          <div className="left">
            <h5 className="rank">{company.rank}.{company.name}</h5>
          </div>
        <div
          className="bar"
          style={{
            width: `${company.value * 10}%`,
            maxWidth: "90%",
            backgroundColor: company.color,
            animationDuration: "1s",
            boxShadow : `0px 0px 10px -1px ${company.color}`
          }}
        >
        </div>
        <div>${(company.value * 100).toFixed(2)}B</div>
        </div>
  )
}

export default RacingCart