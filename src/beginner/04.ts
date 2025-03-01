interface IJob {
  title: string
}

interface IUser {
  name: string
  job?: IJob
}

const user: IUser = {
  name: 'John Doe',
  job: {
    title: 'Software Engineer',
  },
}

const { name, job = {} as IJob } = user

const { title } = job

interface Params1 {
  name: string
}

interface Params2 {
  age: number
}

type Params = Params1 & Params2

const a: Params = {
  name: 'John Doe',
  age: 18,
}

export {}
