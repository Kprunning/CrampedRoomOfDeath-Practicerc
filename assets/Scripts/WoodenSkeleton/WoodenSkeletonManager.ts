import {_decorator} from 'cc'
import {DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from '../../Enums'
import EntityManager from '../../Base/EntityManager'
import WoodenSkeletonStateMachine from './WoodenSkeletonStateMachine'
import EventManager from '../../Runtime/EventManager'
import DataManager from '../../Runtime/DataManager'

const {ccclass, property} = _decorator


@ccclass('WoodenSkeletonManager')
export default class WoodenSkeletonManager extends EntityManager {

  async init() {
    this.fsm = this.addComponent(WoodenSkeletonStateMachine)
    await this.fsm.init()
    super.init({
      x: 2,
      y: 4,
      type: ENTITY_TYPE_ENUM.ENEMY,
      direction: DIRECTION_ENUM.TOP,
      state: ENTITY_STATE_ENUM.IDLE
    })

    EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.focusPlayerMove, this)
    EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onAttack, this)
    EventManager.Instance.on(EVENT_ENUM.PLAYER_BORN, this.focusPlayerMove, this)

    // 保证初始情况面向玩家
    this.focusPlayerMove(true)
  }

  protected onDestroy() {
    EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this.focusPlayerMove)
  }

  private focusPlayerMove(playerBorn: boolean = false) {
    const player = DataManager.Instance.player
    if (!player) {
      return
    }
    const {x: playerX, y: playerY} = player
    const disX = Math.abs(this.x - playerX)
    const disY = Math.abs(this.y - playerY)

    if (disX === disY && !playerBorn) {
      return
    }

    if (this.x <= playerX && this.y >= playerY) {
      // 第一象限
      this.direction = disX > disY ? DIRECTION_ENUM.RIGHT : DIRECTION_ENUM.TOP
    } else if (this.x >= playerX && this.y >= playerY) {
      // 第二象限
      this.direction = disX > disY ? DIRECTION_ENUM.LEFT : DIRECTION_ENUM.TOP
    } else if (this.x >= playerX && this.y <= playerY) {
      // 第三象限
      this.direction = disX > disY ? DIRECTION_ENUM.LEFT : DIRECTION_ENUM.BOTTOM
    } else if (this.x <= playerX && this.y <= playerY) {
      // 第四象限
      this.direction = disX > disY ? DIRECTION_ENUM.RIGHT : DIRECTION_ENUM.BOTTOM
    }

  }

  private onAttack() {
    const {x: playerX, y: playerY} = DataManager.Instance.player
    // 当玩家在敌人周围时,进行攻击
    if ((this.x === playerX && Math.abs(playerY - this.y) <= 1) || (this.y === playerY && Math.abs(playerX - this.x) <= 1)) {
      this.state = ENTITY_STATE_ENUM.ATTACK
    } else {
      this.state = ENTITY_STATE_ENUM.IDLE
    }
  }
}


