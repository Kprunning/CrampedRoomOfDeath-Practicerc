export enum TILE_TYPE_ENUM {
  WALL_LEFT_TOP = 'WALL_LEFT_TOP',
  WALL_LEFT_BOTTOM = 'WALL_LEFT_BOTTOM',
  WALL_COLUMN = 'WALL_COLUMN',
  WALL_ROW = 'WALL_ROW',
  WALL_RIGHT_BOTTOM = 'WALL_RIGHT_BOTTOM',
  WALL_RIGHT_TOP = 'WALL_RIGHT_TOP',
  FLOOR = 'FLOOR',
  CLIFF_LEFT = 'CLIFF_LEFT',
  CLIFF_CENTER = 'CLIFF_CENTER',
  CLIFF_RIGHT = 'CLIFF_RIGHT'
}

export enum EVENT_ENUM {
  NEXT_LEVEL = 'NEXT_LEVEL',
  CTRL_DIRECTION = 'CTRL_DIRECTION',
  PLAYER_MOVE_END = 'PLAYER_MOVE_END',
  PLAYER_BORN = 'PLAYER_BORN',
  ATTACK_PLAYER = 'ATTACK_PLAYER',
  ATTACK_ENEMY = 'ATTACK_ENEMY',
  DOOR_OPEN = 'DOOR_OPEN'
}

export enum CTRL_DIRECTION_ENUM {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  TURN_LEFT = 'TURN_LEFT',
  TURN_RIGHT = 'TURN_RIGHT'
}

export enum FSM_PARAMS_TYPE_ENUM {
  TRIGGER = 'TRIGGER',
  NUMBER = 'NUMBER',
}


export enum PARAMS_NAME_ENUM {
  IDLE = 'IDLE',
  TURN_LEFT = 'TURN_LEFT',
  TURN_RIGHT = 'TURN_RIGHT',
  DIRECTION = 'DIRECTION',
  BLOCK_FRONT = 'BLOCK_FRONT',
  BLOCK_BACK = 'BLOCK_BACK',
  BLOCK_LEFT = 'BLOCK_LEFT',
  BLOCK_RIGHT = 'BLOCK_RIGHT',
  BLOCK_TURN_RIGHT = 'BLOCK_TURN_RIGHT',
  BLOCK_TURN_LEFT = 'BLOCK_TURN_LEFT',
  ATTACK = 'ATTACK',
  DEATH = 'DEATH',
  AIR_DEATH = 'AIR_DEATH'
}


export enum DIRECTION_ENUM {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}


export enum ENTITY_STATE_ENUM {
  IDLE = 'IDLE',
  TURN_LEFT = 'TURN_LEFT',
  TURN_RIGHT = 'TURN_RIGHT',
  BLOCK_FRONT = 'BLOCK_FRONT',
  BLOCK_BACK = 'BLOCK_BACK',
  BLOCK_LEFT = 'BLOCK_LEFT',
  BLOCK_RIGHT = 'BLOCK_RIGHT',
  BLOCK_TURN_RIGHT = 'BLOCK_TURN_RIGHT',
  BLOCK_TURN_LEFT = 'BLOCK_TURN_LEFT',
  ATTACK = 'ATTACK',
  DEATH = 'DEATH',
  AIR_DEATH = 'AIR_DEATH'
}


export enum DIRECTION_ORDER_ENUM {
  TOP = 0,
  BOTTOM = 1,
  LEFT = 2,
  RIGHT = 3,
}

export enum ENTITY_TYPE_ENUM {
  PLAYER = 'PLAYER',
  SKELETON_WOODEN = 'SKELETON_WOODEN',
  SKELETON_IRON = 'SKELETON_IRON',
  DOOR = 'DOOR',
  BURST = 'BURST'
}
