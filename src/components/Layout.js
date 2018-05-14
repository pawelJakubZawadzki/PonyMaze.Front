import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import MazeManagemnet from './MazeManagement';
import PonyControl from './PonyControl';
import MazeDisplay from './MazeDisplay';
import DialogMessage from './DialogMessage';

const Layout = () => (
  <div>
    <AppBar title="Pony Maze" />
    <MazeManagemnet />
    <PonyControl />
    <MazeDisplay />
    <DialogMessage />
  </div>
);

export default Layout;
