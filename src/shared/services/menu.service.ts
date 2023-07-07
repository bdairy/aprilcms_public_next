import { IMenuItem, MenuItem } from "../models/menu-item";
import { ApiService } from "./api.service";

export class MenuService{

  root = 'menus'
  async getMainMenu(): Promise<IMenuItem[]|null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}`);
      if (result) {
        const menu = MenuItem.fromEntityListResult(result.items);
        return menu;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }

  }
}