import { deleteUserById, getUserById, getUsers } from '../db/users'
import express from 'express'

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers()
    return res.status(200).json(users)
  } catch (error) {
    console.error(error)
    return res.sendStatus(400)
  }
}

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params
    const deletedUser = await deleteUserById(id)

    return res.json(deletedUser)
  } catch (error) {
    console.error(error)
    return res.sendStatus(400)
  }
}

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params
    const { values } = req.body

    if (!values) {
      return res.sendStatus(400)
    }

    const user = await getUserById(id)

    user.set(values)
    await user.save()

    return res.status(200).json(user).end()
  } catch (error) {
    console.error(error)
    return res.sendStatus(400)
  }
}
