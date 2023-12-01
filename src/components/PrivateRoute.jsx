<<<<<<< HEAD
import {useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PrivateRoute({
    children,
    ...rest
}) {
    const navigate = useNavigate()

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setIsAuthenticated(true)
        }
        else{
            navigate('/login')
        }
    }, [])

    return (
        <div>
            {isAuthenticated ? (
                children
            ) : (
                <h1>No Authenticated</h1>
            )}
        </div>
    )
=======
import {useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PrivateRoute({
    children,
    ...rest
}) {
    const navigate = useNavigate()

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setIsAuthenticated(true)
        }
        else{
            navigate('/login')
        }
    }, [])

    return (
        <div>
            {isAuthenticated ? (
                children
            ) : (
                <h1>No Authenticated</h1>
            )}
        </div>
    )
>>>>>>> ebb58e66a60be14d34149f9c0b9c9c42dee52ad8
}