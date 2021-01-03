export class Container {
  Id: string;
  Names: string[];
  Image: string;
  ImageID: string;
  Command: string;
  State: string;
  Status: string;
  Ports: {PrivatePort: number; PublicPort: number; Type: string}[];
  Labels: any[];
  SizeRw: number;
  SizeRootFs: number;
  HostConfig: {NetworkMode: string};
  NetworkSettings: any[];
  Mounts: any[];

  constructor(
    Id: string,
    Names: string[],
    Image: string,
    ImageID: string,
    Command: string,
    State: string,
    Status: string,
    Ports: {PrivatePort: number; PublicPort: number; Type: string}[],
    Labels: any[],
    SizeRw: number,
    SizeRootFs: number,
    HostConfig: {NetworkMode: string},
    NetworkSettings: any[],
    Mounts: any[],
  ) {
    this.Id = Id;
    this.Names = Names;
    this.Image = Image;
    this.ImageID = ImageID;
    this.Command = Command;
    this.State = State;
    this.Status = Status;
    this.Ports = Ports;
    this.Labels = Labels;
    this.SizeRw = SizeRw;
    this.SizeRootFs = SizeRootFs;
    this.HostConfig = HostConfig;
    this.NetworkSettings = NetworkSettings;
    this.Mounts = Mounts;
  }
}
