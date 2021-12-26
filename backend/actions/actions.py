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

class ActionShowProductsInCategoryFromSlot(Action):
    
        def name(self) -> Text:
            return "action_show_products_in_category_from_slot"
    
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

class ActionShowProductsInCategoryFromEntity(Action):
    
        def name(self) -> Text:
            return "action_show_products_in_category_from_entity"
    
        def run(self, dispatcher: CollectingDispatcher,
                tracker: Tracker,
                domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
            category = tracker.get_slot('product_category')
            
            return_str = " "
            found_cat = False
            with open(f'data/products.json', 'r') as f:
                products = json.load(f)
                for product in products["products"]:
                    
                    if product["category"].lower() == category.lower():
                        print(product)
                        found_cat = True
                        return_str += f"{product['name']} {product['price']}\n"
            if found_cat:
                print(return_str)
                dispatcher.utter_message(text=return_str)
            else:
                dispatcher.utter_message(text="Sorry, We don't have any products in this category.")
            return []

class ActionShowProductById(Action):

    def name(self) -> Text:
        return "action_show_product_by_id"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        product_id = tracker.latest_message['entities'][0]['value']

        print(product_id)
        return_str = " "
        found_product = False
        with open(f'data/products.json', 'r') as f:
            products = json.load(f)
            for product in products["products"]:
                if product["id"] == product_id:
                    found_product = True
                    return_str += f"{product['name']} {product['price']}\n"
        if found_product:
            dispatcher.utter_message(text=return_str)
        else:
            dispatcher.utter_message(text="Sorry, We don't have any products with this id.")
        return []

