import React from 'react'
import Heading from '../parts/Heading';
import RepairBox from '../parts/RepairBox';

const RepairPage = () => (
  <div className="repairSection">
    <Heading content="repair" />
    <div className="repairBoxes">
      <RepairBox />
    </div>
  </div>
)
export default RepairPage;