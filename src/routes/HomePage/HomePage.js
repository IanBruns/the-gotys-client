import React from 'react';

export default function HomePage(props) {
    return (
        <div className='HomePage'>
            <div class='menu-options'>
                <select>
                    <option>Filter by rating</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>

                <select>
                    <option>Release Year</option>
                    <option>Current</option>
                    <option>Any</option>
                </select>

                <button>Add A game</button>
                <button>Award your GOTY</button>
            </div>
        </div>
    )
}