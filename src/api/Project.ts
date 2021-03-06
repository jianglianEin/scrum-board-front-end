import ProjectMutation from "api/mutation/ProjectMutation";
import ProjectQuery from "api/query/ProjectQuery";
import ProjectModel from "models/Project";
import ResultOutput from "models/ResultOutput";
import client from "./base/client";

export async function selectProjectByCreator(creator: {
  creator: string;
}): Promise<Array<ProjectModel.Info>> {
  const data: any = await client.request(ProjectQuery.selectProjectByCreatorQuery, creator);
  return data.selectProjectByCreator;
}

export async function selectProjectById(projectId: {
  projectId: string;
}): Promise<ProjectModel.Info> {
  const data: any = await client.request(ProjectQuery.selectProjectById, projectId);
  return data.selectProjectById;
}

export async function createProject(
  projeceCreateModel: ProjectModel.CreateInfo
): Promise<ProjectModel.Info> {
  const data: any = await client.request(ProjectMutation.createProject, projeceCreateModel);
  return data.createProject;
}

export async function updateProject(
  projeceUpdateModel: ProjectModel.UpdateInfo
): Promise<ProjectModel.Info> {
  const data: any = await client.request(ProjectMutation.updateProject, projeceUpdateModel);
  return data.updateProject;
}

export async function removeProject(projectId: { projectId: string }): Promise<ResultOutput> {
  const data: any = await client.request(ProjectMutation.removeProject, projectId);
  return data.removeProject;
}
