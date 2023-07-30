import React from 'react'
import { useQuery } from "graphql-hooks";
import Heading from '../parts/Heading';
import RepairBox from '../parts/RepairBox';
import { REPAIR_QUERY } from '../../queries/repairQuery';

const RepairPage = () => {
  const { data } = useQuery(REPAIR_QUERY);
  const repairs = data?.allRepairs;

  return (
    <div className="repairSection">
      <Heading content="repair" />
      <div className="repairBoxes">
      {repairs?.map((repair) => (
          <RepairBox key={repair.id} data={repair} />
        ))}
      </div>
    </div>
  )
}
export default RepairPage;