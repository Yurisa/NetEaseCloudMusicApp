//
//  PushNative.m
//  tassel
//
//  Created by Czq on 2018/6/6.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "PushNative.h"
#import <React/RCTBridge.h>

// 导入跳转的页面
#import "LoginController.h"
// 导入AppDelegate，获取UINavigationController
#import "AppDelegate.h"
#import "plistHelper.h"

@implementation PushNative

RCT_EXPORT_MODULE(PushNative)
// RN跳转原生界面
// RNOpenOneVC指的就是跳转的方法，下面会用到
RCT_EXPORT_METHOD(RNOpenOneVC:(NSString *)msg){
  NSLog(@"RN传入原生界面的数据为:%@",msg);
  //主要这里必须使用主线程发送,不然有可能失效
  dispatch_async(dispatch_get_main_queue(), ^{
    LoginController *one = [[LoginController alloc]init];
    
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    [app.nav pushViewController:one animated:YES];
  });
}
RCT_EXPORT_METHOD(exitPlist){
  //主要这里必须使用主线程发送,不然有可能失效
  [plistHelper setPlist:@"0"];
  dispatch_async(dispatch_get_main_queue(), ^{
    LoginController *one = [[LoginController alloc]init];
    
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    [app.nav pushViewController:one animated:YES];
  });
}

RCT_REMAP_METHOD(findEvents,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray *events = @[];
  if (events) {
    resolve(events);
  } else {
    NSError *error=[NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
    reject(@"no_events", @"There were no events", error);
  }
}
@end
