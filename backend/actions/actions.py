import datetime as dt
import json
from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionShowCategories(Action):

    def name(self) -> Text:
        return "action_show_categories"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        with open('data/categories.txt', 'r') as f:
            categories = f.read()
            jsonResponse = {'type':'list', 'listTitle': 'categories','list': [category.strip() for category in categories.split('\n')]}
            print("Response: ", json.dumps(jsonResponse))
            dispatcher.utter_message(text=json.dumps(jsonResponse))
        return []

class ActionShowProductsInCategory(Action):
    
        def name(self) -> Text:
            return "action_show_products_in_category"
    
        def run(self, dispatcher: CollectingDispatcher,
                tracker: Tracker,
                domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
            
            category = tracker.get_slot('product_category')
            return_str = " "
            found_cat = False
            with open(f'data/products.json', 'r') as f:
                products = json.load(f)
                products_json = {'type': 'product', 'listTitle': 'products' ,'list': []}
                for product in products["products"]:
                    # ASAD
                    if product["category"].lower() == category.lower():
                        found_cat = True
                        return_str += f"{product['name']} {product['price']}\n"

                        products_json['products'].append(product)

            if found_cat:
                print(json.dumps(products_json))
                dispatcher.utter_message(text=json.dumps(products_json))
            else:
                dispatcher.utter_message(text=json.dumps({'type':'text', 'text':"Sorry, We don't have any products in this category."}))
            return []


