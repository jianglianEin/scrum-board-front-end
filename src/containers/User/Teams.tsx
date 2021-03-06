import TeamModel from "models/Team";
import React from "react";
import { Table } from "react-bootstrap";

type Props = {
  data: TeamModel.Info[];
};

export default function Teams(props: Props) {
  const teams = props.data;

  return (
    <Table hover borderless={true}>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Creator</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team.id}>
            <td>
              <a href="/">{team.name}</a>
            </td>
            <td>{team.creator}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
