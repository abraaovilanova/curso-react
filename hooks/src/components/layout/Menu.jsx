import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/usestate">useState()</Link>
                </li>
                <li>
                    <Link to="/useeffect">useEffect()</Link>
                </li>
                <li>
                    <Link to="/useref">useRef()</Link>
                </li>
                <li>
                    <Link to="/usememo">useMemo()</Link>
                </li>
                <li>
                    <Link to="/usecallback">useCallback()</Link>
                </li>
                <li>
                    <Link to="/usecontext">useContext()</Link>
                </li>
                <li>
                    <Link to="/usereducer">useReducer()</Link>
                </li>
                <li>
                    <Link to="/usemyhook">useMyHook()</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu